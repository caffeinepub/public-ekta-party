import Text "mo:core/Text";
import Iter "mo:core/Iter";

actor {
  type PartyInfo = {
    name : Text;
    tagline : Text;
    whatsapp : Text;
  };

  type ManifestoPoint = Text;

  let partyInfo : PartyInfo = {
    name = "Public Ekta Party (P.E.P. - For The People)";
    tagline = "For The People, By The People";
    whatsapp = "+91 1234567890";
  };

  let manifestoPoints : [ManifestoPoint] = [
    "Universal Education",
    "Equal Opportunity For All",
    "Affordable Healthcare",
    "Modern Infrastructure",
    "Clean Environment",
    "Transparent Governance",
    "Digital India",
    "Women Empowerment",
    "Youth Development",
  ];

  public query ({ caller }) func getPartyInfo() : async PartyInfo {
    partyInfo;
  };

  public query ({ caller }) func getManifestoPoints() : async [ManifestoPoint] {
    manifestoPoints.values().toArray().sort();
  };
};
