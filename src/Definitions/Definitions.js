import React from "react";
import "./Definitions.css";


const Definitions = ({ LightMode, word, category, meanings }) => {
  return (
    <div className="meanings">
      {meanings[0] && word && category === "en" && (
        <audio
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          controls
          style={{ backgroundColor: "#fff",
           borderRadius: 10 }}
        >
          Your browser doesn't support audio element
        </audio>
      )}

      {word === "" || category ==="" ? (
        <pre className="subTitle">
           1. Select language
            <br/>
           2. Start by typing a word in Search</pre>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="singleMean"
                style={{ backgroundColor:LightMode? "#3b5360":"white", color:LightMode ? "white" :"black" }}
              >
                <b>{def.definition}</b>
                <hr style={{ backgroundColor: "black", width: "100%" }} />
                {def.example && (
                  <span>
                    <b>Example :</b>
                    {def.example}
                  </span>
                )}
                {def.synonyms && (
                  <span>
                    <b>Synonyms: </b>
                    {def.synonyms.map((s) => `${s},`)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definitions;