import React, { useRef, useEffect } from "react";

export type TesseractProps = {
  size?: number; // canvas size in px (square)
  lineWidth?: number;
  color?: string;
  bg?: string;
  speed?: number; // base rotation speed multiplier
};

// A self-contained React component that draws and animates a projected 4D tesseract
// on an HTML canvas. No external libs required.
export default function TesseractCanvas({
  size = 300,
  lineWidth = 5,
  color = "#0ea5e9",
  bg = "transparent",
  speed = 1,
}: TesseractProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const rotationRef = useRef({
    xy: 0.4,
    xz: 0.2,
    yw: 0.25,
    xw: 0.15,
    yz: 0.1,
    zw: 0.06,
  });
  const hoverRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.lineWidth = lineWidth * dpr;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    // Define 4D hypercube vertices (16 vertices): each coordinate is ±1
    const verts4D: number[][] = [];
    for (let x = -1; x <= 1; x += 2) {
      for (let y = -1; y <= 1; y += 2) {
        for (let z = -1; z <= 1; z += 2) {
          for (let w = -1; w <= 1; w += 2) {
            verts4D.push([x, y, z, w]);
          }
        }
      }
    }

    // Create edges: connect vertices that differ by exactly one coordinate
    const edges: [number, number][] = [];
    for (let i = 0; i < verts4D.length; i++) {
      for (let j = i + 1; j < verts4D.length; j++) {
        const a = verts4D[i];
        const b = verts4D[j];
        let diff = 0;
        for (let k = 0; k < 4; k++) if (a[k] !== b[k]) diff++;
        if (diff === 1) edges.push([i, j]);
      }
    }

    // Projection helpers
    function rotate4D(v: number[], rot: any): [number, number, number, number] {
      // Rotations in plane pairs. We'll apply several rotation matrices sequentially.
      let [x, y, z, w] = v;

      // helper for 2D rotation
      function rot2(a: number, b: number, ang: number): [number, number] {
        const c = Math.cos(ang);
        const s = Math.sin(ang);
        return [a * c - b * s, a * s + b * c];
      }

      // XY
      [x, y] = rot2(x, y, rot.xy);
      // XZ
      [x, z] = rot2(x, z, rot.xz);
      // XW
      [x, w] = rot2(x, w, rot.xw);
      // YW
      [y, w] = rot2(y, w, rot.yw);
      // YZ
      [y, z] = rot2(y, z, rot.yz);
      // ZW
      [z, w] = rot2(z, w, rot.zw);

      return [x, y, z, w];
    }

    function project4Dto2D(v4: number[]): [number, number] {
      // First project 4D -> 3D using perspective on the W axis
      // Put camera at w = -cameraW
      const cameraW = 3; // increase to make W-perspective shallower
      const w = v4[3];
      const wFactor = cameraW / (cameraW - w); // perspective
      const x3 = v4[0] * wFactor;
      const y3 = v4[1] * wFactor;
      const z3 = v4[2] * wFactor;

      // Then project 3D -> 2D using a simple perspective on Z
      const cameraZ = 5;
      const zFactor = cameraZ / (cameraZ - z3);
      const x2 = x3 * zFactor;
      const y2 = y3 * zFactor;

      // Scale to canvas coords
      const scale = (size / 6.5) * dpr; // adjust scale
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      return [cx + x2 * scale, cy + y2 * scale];
    }

    let last = performance.now();

    function draw(t: number) {
      const now = t;
      const dt = (now - last) / 1000;
      last = now;

      // update rotations (smaller while hovered)
      const multiplier = hoverRef.current ? 0.2 : 1;

      const r = rotationRef.current;
      r.xy += 0.6 * dt * speed * multiplier;
      r.xz += 0.35 * dt * speed * multiplier;
      r.xw += 0.25 * dt * speed * multiplier;
      r.yw += 0.3 * dt * speed * multiplier;
      r.yz += 0.2 * dt * speed * multiplier;
      r.zw += 0.15 * dt * speed * multiplier;

      // clear
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (bg !== "transparent") {
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      ctx.strokeStyle = color;
      ctx.globalAlpha = 0.95;

      // compute rotated & projected points
      const pts2D: [number, number][] = verts4D.map((v) => {
        const rv = rotate4D(v, r);
        return project4Dto2D(rv);
      });

      // draw edges
      ctx.beginPath();
      for (const [a, b] of edges) {
        const [x1, y1] = pts2D[a];
        const [x2, y2] = pts2D[b];
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
      }
      ctx.stroke();

      // subtle nodes
      ctx.fillStyle = color;
      for (const [x, y] of pts2D) {
        ctx.beginPath();
        ctx.arc(x, y, 2 * dpr, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);

    // hover controls to slow down
    function onEnter() {
      hoverRef.current = true;
    }
    function onLeave() {
      hoverRef.current = false;
    }

    canvas.addEventListener("mouseenter", onEnter);
    canvas.addEventListener("mouseleave", onLeave);

    // resize observer (optional) - keep internal canvas size fixed to `size` prop

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener("mouseenter", onEnter);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, [size, lineWidth, color, bg, speed]);

  return (
    <div className="flex justify-center" style={{ width: size, height: size }}>
      <canvas
        ref={canvasRef}
        role="img"
        aria-label="Tesseracto animado"
        style={{ display: "block", borderRadius: 16 }}
      />
    </div>
  );
}
