// components/PaginationDots.tsx
import styled from "styled-components";
import { useCallback, useEffect, useRef } from "react";

type DotsProps = {
  active: number; // 활성화된 dot 인덱스
  onChange?: (index: number) => void;
  size?: number; // dot 지름
  gap?: number; // dot 간격
};

export default function PagenationDots({
  active,
  onChange,
  size = 14,
  gap = 12,
}: DotsProps) {
  const dots = Array.from({ length: 5 });
  const activeBtnRef = useRef<HTMLButtonElement | null>(null);

  // 활성 dot으로 포커스 이동(로빙 포커스)
  useEffect(() => {
    activeBtnRef.current?.focus();
  }, [active]);
  const clamp = (n: number) => Math.max(0, Math.min(5 - 1, n));

  const getOpacity = (i: number) => {
    const d = Math.abs(i - active);
    if (d === 0) return 1; // 활성 dot
    if (d === 1) return 0.7; // 이웃 dot
    return 0.25; // 그 외 dot
  };

  return (
    <Wrap $gap={gap} aria-label="페이지 선택">
      {dots.map((_, i) => {
        const isActive = i === active;
        return (
          <Dot
            key={i}
            ref={isActive ? activeBtnRef : undefined}
            $size={size}
            $active={isActive}
            style={{ opacity: getOpacity(i) }}
            aria-label={`${i + 1}번째`}
            aria-current={isActive ? "page" : undefined}
            tabIndex={isActive ? 0 : -1} // 활성만 탭 진입
            onKeyDown={(e) => {
              if (!onChange) return;
              if (e.key === "ArrowLeft") {
                e.preventDefault();
                onChange(clamp(active - 1));
              }
              if (e.key === "ArrowRight") {
                e.preventDefault();
                onChange(clamp(active + 1));
              }
            }}
            onClick={() => onChange?.(i)}
          />
        );
      })}
    </Wrap>
  );
}

/* styles */
const Wrap = styled.div<{ $gap: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(p) => p.$gap}px;
  padding: 8px 0;
`;

const Dot = styled.button<{ $size: number; $active: boolean }>`
  width: ${(p) => p.$size}px;
  height: ${(p) => p.$size}px;
  border-radius: 50%;
  border: 0;
  padding: 0;
  cursor: pointer;

  background: ${(p) =>
    p.$active
      ? "var(--color-navy)"
      : "color-mix(in srgb, var(--color-navy) 30%, white)"};

  transition: transform 0.15s ease, background-color 0.15s ease,
    opacity 0.15s ease;
  /* transform: ${(p) => (p.$active ? "scale(1.2)" : "scale(1)")}; */
`;
