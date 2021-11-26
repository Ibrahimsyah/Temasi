export const generatePlasmaTitle = (golongan, rhesus) => {
  const firstPhrase = ['Dibutuhkan', 'Dicari', 'Mohon bantuan', 'Butuh'];
  const secondPhrase = ['Plasma', 'Plasma Darah', 'Plasma Konvalesen'];
  const firstRandIndex = Math.floor(Math.random() * firstPhrase.length);
  const secondRandIndex = Math.floor(Math.random() * secondPhrase.length);

  return `${firstPhrase[firstRandIndex]} ${secondPhrase[secondRandIndex]} Golongan ${golongan}${rhesus}`;
};
