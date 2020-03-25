import { InMemoryDbService } from "angular-in-memory-web-api";
import { Movie } from "./movie";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies = [
      {
        id: 0,
        title: "transformers",
        genre: "action",
        duration: 144,
        year: 2007,
        description:
          "Several thousand years ago, the planet Cybertron was consumed by a civil war between the two Transformer factions, the Autobots led by Optimus Prime and the Decepticons led by Megatron. Optimus jettisoned the Allspark, a mystical artifact that brings life to the planet, into space, but Megatron pursued it. Megatron crashed onto Earth, landing in the Arctic Circle and froze, and was discovered in 1895 by explorer Captain Archibald Witwicky. Witwicky inadvertently activated Megatron's navigational system, which etched the Allspark's coordinates into his glasses. The glasses eventually end up in the possession of his great-great-grandson Sam Witwicky."
      },
      {
        id: 1,
        title: "rocky",
        genre: "action",
        duration: 119,
        year: 1976,
        description:
          "In 1975, the heavyweight boxing world champion, Apollo Creed, announces plans to hold a title bout in Philadelphia during the upcoming United States Bicentennial. However, he is informed five weeks from the fight date that his scheduled opponent is unable to compete due to an injured hand. With all other potential replacements booked up or otherwise unavailable, Creed decides to spice things up by giving a local contender a chance to challenge him."
      },
      {
        id: 2,
        title: "Pearl Harbor",
        genre: "drama",
        duration: 183,
        year: 2001,
        description:
          "In January 1941, with World War II raging, Danny and Rafe are both First Lieutenants under the command of Major Jimmy Doolittle. Doolittle informs Rafe that he has been accepted into the Eagle Squadron, a RAF outfit for American pilots during the Battle of Britain. Rafe meets a nurse named Evelyn, who passes his medical exam despite his dyslexia. That night, Rafe and Evelyn enjoy an evening of dancing at a nightclub and later, a jaunt in the New York harbor in a borrowed police boat. Rafe shocks Evelyn by saying that he has joined the Eagle Squadron and is leaving the next day. During a mission to intercept a Luftwaffe bombing raid, Rafe is shot down over the English Channel and is presumed killed in action. A mourning Evelyn finds comfort in Danny, leading to a romance between the two, and they take a romantic night in an army plane up in the clouds, and a romantic swim at the beach. Meanwhile, the Imperial Japanese Navy begins to plot a surprise attack on the Pacific Fleet at Pearl Harbor after the US had cut off their oil supply. They send in spies to survey the naval ships and airfields, modify aerial torpedoes for the shallow harbor, and send a series of confusing messages that expressing a hope for peace."
      },
      {
        id: 3,
        title: "9 Reinas",
        genre: "Crime/Drama",
        duration: 114,
        year: 2000,
        description:
          "The film opens at a convenience store early in the morning, the present time. Juan (Gastón Pauls), a con artist, successfully scams the cashier, and later attempts the same scam again on the next shift. Marcos (Ricardo Darín), who has been observing him, steps in pretending to be a police officer and takes Juan away. As soon as they are far enough, Marcos tells Juan he is not actually a cop but a fellow con man. Juan asks Marcos to show him the ropes, because his father, also a con man, is in jail and he needs to raise money quickly to bribe a judge to reduce his father's sentence from 10 years to 6 months."
      }
    ];

    localStorage.setItem("list", JSON.stringify(movies)); //saves the movies in the local storage

    return { movies };
  }
}
