import React, { useState } from 'react';

function App() {
  const [languages, setLanguages] = useState([
    { name: 'Php', votes: 0 },
    { name: 'Python', votes: 0 },
    { name: 'JavaScript', votes: 0 },
    { name: 'Java', votes: 0 },
  ]);

  const increaseVotes = (languageName) => {
    const updatedLanguages = languages.map((language) => {
      if (language.name === languageName) {
        return { ...language, votes: language.votes + 1 };
      }
      return language;
    });

    setLanguages(updatedLanguages);
  };

  return (
    <div className="App">
      <h4>Vote for Your Favorite Language</h4>
      <ul>
        {languages.map((language, index) => (
          <li key={index}>
            Votes: {language.votes} - {language.name}  
            <button onClick={() => increaseVotes(language.name)}>Vote</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

