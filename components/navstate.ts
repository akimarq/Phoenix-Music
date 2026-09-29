import { useSyncExternalStore } from "react";

let hidden = false;
const listeners = new Set<() => void>();

export function setNavHidden(next: boolean) {
    if (next === hidden) return;
    hidden = next;
    listeners.forEach((listener) => listener());
}

export function isNavHidden() {
    return hidden;
}

export function subscribeNav(listener: () => void) {
    listeners.add(listener);
    return () => listeners.delete(listener);
}

export function useNavHidden() {
    return useSyncExternalStore(subscribeNav, isNavHidden, () => false);
}