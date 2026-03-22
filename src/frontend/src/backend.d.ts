import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type ManifestoPoint = string;
export interface PartyInfo {
    tagline: string;
    name: string;
    whatsapp: string;
}
export interface backendInterface {
    getManifestoPoints(): Promise<Array<ManifestoPoint>>;
    getPartyInfo(): Promise<PartyInfo>;
}
