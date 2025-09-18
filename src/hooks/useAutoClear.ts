import { useCallback, useEffect, useRef } from "react";

/**
 * Hook générique pour planifier des clear/reset temporisés (setTimeout)
 * en évitant les fuites de timers si le composant se démonte.
 *
 * Pourquoi: tu utilisais des setTimeout sans cleanup dans le hook contact → fuite potentielle.
 * Ici on centralise le pattern, on nettoie tout au unmount, et on expose une API simple.
 */
export function useAutoClear() {
  type Timer = ReturnType<typeof setTimeout>;
  const timersRef = useRef<Timer[]>([]);

  const schedule = useCallback((fn: () => void, delayMs: number) => {
    const id = setTimeout(fn, delayMs);
    timersRef.current.push(id);
    return id;
  }, []);

  const clearAll = useCallback(() => {
    for (const id of timersRef.current) clearTimeout(id);
    timersRef.current = [];
  }, []);

  useEffect(() => clearAll, [clearAll]);

  return { schedule, clearAll };
}