import React from "react";
import { Link } from "react-router-dom";

function History() {
  return (
    <>
      <h1 className="text-3xl">History</h1>
      <div>
        Study of past is known as History. <br /> <br />
        History is divided in three Periods : <br />
        Pre-Historic Period- Period of which we do not have written evidences.
        eg- Palaeolithic Age, Neolithic Age. <br />
        Proto-Historic Period- Period of which we have written evidences but not
        deciphered yet. eg- Harappan civilization. <br />
        Historic Period- Period of which we have written evidences. eg- Maurya
        period.
        <br /> <br />
        Indian history is divided into three main parts : <br />
        Ancient History <br />
        Medieval History <br />
        Modern History
      </div>
      <br />
      <div>
        British historian divided Indian history in the middle 19th centuary on
        the basis of religion of ruler and not on the basis of economy, society
        and culture of the state.
      </div>
      <br />
      <div>
        <div className="text-[1.2rem]">Importance of History</div>
        History tells us about: <br />
        How society evolve from hunter and gathere to civilization(who know
        writing). <br />
        How people used natural resources and created livelihood for themselves.
        <br />
        Where they lived and what kind of materials they used. <br />
        How India become a country with unity in diversity.
      </div>{" "}
      <br />
      <div className="text-2xl">Sources of History</div> <br />
      <div className="text-[1.2rem]">Material Remains</div>
      <div>
        Carbon dating of these remains tells about the time period. <br />
        Pollen analysis tells about the climate and vegetation of that period.{" "}
        <br />
        Metal products tells about from where raw material was bought and which
        technology were used for their making. <br />
        Animal bones reveal about weather they were domesticated or not. <br />
        Megaliths(graves encircled with big stones) tells about beliefs of
        people. <br />
        Mound's excavation tells about matrial used by them and layout of their
        settlements.
      </div>{" "}
      <br />
      <div className="text-[1.2rem]">Coins</div>
      <div>
        Numismatic(study of coins) reveals lot of information about the period
        in which these coins were made and used. <br />
        It tells about what kind of metals(copper, silver, gold, lead) were used
        during that time. <br />
        Roman coins found tells about trade relation of India with Roman Empire.{" "}
        <br />
        Quantity of coins and percentage of gold and silver in these coin tells
        about economic condition of the state. <br />
        Symbols, names on the coins tells about the religion, king etc. of the
        time. <br />
        Quantity of coins found at different places also tells about extent of
        empire.
      </div>{" "}
      <br />
      <div className="text-[1.2rem]">Inscriptions</div>
      <div>
        Epigraphy(study of inscriptions) reveals more important information
        about the time they were engraved on copper plates, pillars, walls etc.{" "}
        <br />
        Palaeography(stydy of writing in these inscriptions) tells about the
        language(Prakrit, Sanskrit etc.) used by the people and the
        script(Brahmi, Kharosthi etc.) used for writing. <br />
        Harrapan inscriptions were written in pictoral form but we are unable to
        deciphered them yet. <br />
        These inscriptions were used for informing people about royal orders,
        King's achievements, event happened at that time,donations etc.
      </div>
      <br />
      <div className="text-[1.2rem]">Literature</div>
      <div>
        Manuscript(hand Written document) tells about the social and cultural
        life of that period. <br />
        These literature tells about public sacrifices, rituals followed at the
        time of birth, marriage, funeral etc. <br />
        These literature tells about political, economic, religious condition of
        state. <br />
        These literature tells about language used by the people.
      </div>
      <br />
      <div className="text-[1.2rem]">Foreign Accounts</div>
      <div>
        Foreign accounts supplements Indian literatures. Alexander invasion was
        mentioned in Greek literatures but not in Indian literatures. <br />
        These accounts tells about trade between India and their country. <br />{" "}
        These accounts tells about social, economic and cultural life. <br />
        These accounts also tells about path(by land, sea) used for trade and
        travell.
      </div>
      <br />
      <div className="flex float-right pb-[1rem]">
        <Link
          className="bg-green-700/90 w-[4rem] text-center"
          to={`/history/ancient/pre-historic`}
        >
          Next
        </Link>
      </div>
    </>
  );
}

export default History;
