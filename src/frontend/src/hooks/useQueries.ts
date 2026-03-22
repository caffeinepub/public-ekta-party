import { useQuery } from "@tanstack/react-query";
import type { PartyInfo } from "../backend";
import { useActor } from "./useActor";

export function usePartyInfo() {
  const { actor, isFetching } = useActor();
  return useQuery<PartyInfo>({
    queryKey: ["partyInfo"],
    queryFn: async () => {
      if (!actor)
        return {
          name: "PUBLIC EKTA PARTY",
          tagline: "P.E.P. - For The People",
          whatsapp: "6001885969",
        };
      return actor.getPartyInfo();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useManifestoPoints() {
  const { actor, isFetching } = useActor();
  return useQuery<string[]>({
    queryKey: ["manifestoPoints"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getManifestoPoints();
    },
    enabled: !!actor && !isFetching,
  });
}
