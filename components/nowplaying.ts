import { useSyncExternalStore } from "react";

type NowPlaying = { playing: boolean; dedication: string };

const active = new Map<string, string>();
const listeners = new Set<() => void>();
const idle: NowPlaying = { playing: false, dedication: "" };
let snapshot: NowPlaying = idle;

export function setPlaying(id: string, dedication: string, isPlaying: boolean) {
  if (isPlaying) active.set(id, dedication);
  else active.delete(id);

  const latest = [...active.values()].at(-1);
  snapshot = { playing: active.size > 0, dedication: latest ?? snapshot.dedication };
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useNowPlaying() {
  return useSyncExternalStore(subscribe, () => snapshot, () => idle);
}