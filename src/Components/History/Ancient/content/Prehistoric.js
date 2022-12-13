import React from "react";
import { Link } from "react-router-dom";

function Prehistoric() {
  return (
    <>
      <h1 className="text-3xl">Pre Historic Period</h1>
      <div>
        The period before writing was invented is known as Pre Historic Period.
        This period is also Known as Stone Age. People of this period start
        using tools made of stones. This period started around 3.5 million years
        ago and continued till 10,000 BCE.
      </div>
      <br />
      <div>This period was divided into following period :</div>
      <br />
      <div>Palaeolithic Age </div>
      <div>Mesolithic Age</div>
      <div>Neolithic Age </div>
      <br />
      <div>
        Calcolithic Age and Iron Age are considered in pre-historic period and
        proto-historic period both. During these period some places did not knew
        about writing and at some places writing was used but not deciphered
        yet.{" "}
      </div>
      <br />
      <br />
      <h2 className="text-2xl">Palaeolithic Age</h2>
      <div>This phase is also Known as Old Stone Age. </div>
      <div>
        This period started around 2.5 million years ago and ended around 10,000
        BCE. People of this phase were hunter and gatherer. They were unaware of
        cultivation. They use to live in caves and rock shelters. They did not
        live in Indus and Ganga plains. They lived nomadic lifestyle.
      </div>
      <br />
      <div>This period is further divided into three phases :</div>
      <br />
      <ul>
        <li>Early or Lower Palaeolithic </li>
        <li>Middle Palaeolithic</li>
        <li>Upper Palaeolithic</li>
      </ul>
      <br />

      <div className="text-[1.2rem]">Early or Lower Palaeolithic </div>
      <div>
        This phase continued till 3,00,000 BCE. <br />
        People of this phase use hand-axes, cleavers for hunting, skinning etc.{" "}
        <br />
        They used to live in Kashmir, Thar Desert, Belan valley Mirzapur in
        Uttar Pradesh, Soan river valley in Pakistan etc. <br />
        Climate became less humid(cold and dry).
      </div>
      <br />

      <div className="text-[1.2rem]">Middle Palaeolithic</div>
      <div>
        This phase existed between 3,00,000 - 40,000 BCE. <br />
        People of this phase use flakes. These flakes were better than hand-axes
        and cleavers. <br />
        They lived in Soan valley, south of Tungabhadra, along Narmada river
        etc.
      </div>
      <br />

      <div className="text-[1.2rem]">Upper Palaeolithic</div>
      <div>
        This phase existed between 40,000 - 10,000 BCE. <br />
        People of this phase use blades and burins. <br />
        They lived in Karnataka, Maharastra, Chotanagpur plateau etc. <br />
        Modern human being first appeared in this phase. <br />
        Domestication also started in this phase. Goats were probably the first
        animal to be domesticated and then sheep. <br />
        They made paintings of various events. Bhimbetka cave painting are
        30,000 years old. <br />
        During this phase climate start becoming warm.
      </div>
      <br />
      <br />
      <h2 className="text-2xl">Mesolithic Age</h2>
      <div>
        This phase existed between 8,000-4,000 BCE(varies from places to
        places). This Phase is considered as transition phase between
        Palaeolithic Age and Neolithic Age. <br />
        Paintings depicting hunting by both men and women were found at
        Bhimbetaka caves. <br />
        They used to live in caves, rock shelters and huts. <br />
        They used stones to generate fire. They use microlith(small stone tools)
        for hunting, skinning etc. <br />
        They domesticated animals(use them only for meat not for milk etc.) and
        also do cultivation. Evidence of domestication found at Bagor in
        Rajasthan, Adamagarh in Madhya Pradesh etc. and that of cultivation near
        Sambhar lake in Rajasthan. First plant to be cultivated were wheat and
        barley. Nomadic lifestyle started shifting towards sedentary lifestyle.
        <br />
        They burried the dead. Extended burial, Crouched Burial, Double burial
        at different places. At some places offering were also provided to dead.
        <br />
        Largest Mesolithic site in India was found at Bagor,Rajasthan. People
        also start living in Gangatic Plains.
      </div>
      <br />
      <br />
      <h2 className="text-2xl">Neolithic Age</h2>
      <div>
        This phase existed between 6,000-1,000 BCE. <br />
        They used polished stone tools. <br />
        They cultivated barley, rice, wheat. <br />
        During early phase use hand made pottery, later footwheels were used for
        making them.
      </div>
      <br />

      <div>People of this phase lived in various parts of the countries :</div>
      <br />
      <div className="text-[1.2rem]">Burzahom, Jammu and Kashmir</div>
      <div>
        They lived in oval shaped pit houses to protect them from cold weather
        <br />
        They also used bone tools. <br />
        They used coarse gray pottery. <br />
        They burried the dead with their dog.
      </div>
      <br />
      <div className="text-[1.2rem]">Soth India</div>
      <div>
        They lived south of Godavari river at hills top and plateau. <br />
        They used fire-baked earthen pottery. <br />
        They domesticated goat, sheep, cattle. <br />
        Ash mound and habitation site found in Piklihal, Karnataka.
      </div>
      <br />
      <div className="flex place-content-between px-[1rem]">
        <Link
          className="bg-green-700/90 w-[4rem] text-center"
          to={`/history/ancient/history`}
        >
          Prev
        </Link>
        <Link
          className="bg-green-700/90 w-[4rem] text-center"
          to={`/history/ancient/chalcolitic`}
        >
          Next
        </Link>
      </div>
    </>
  );
}
export default Prehistoric;
