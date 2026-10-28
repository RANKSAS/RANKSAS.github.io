const form = document.querySelector('#calculator');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const total = Number(document.querySelector('#total').value);
  const mentions = Number(document.querySelector('#mentions').value);
  const result = document.querySelector('#result');
  if (!Number.isInteger(total) || !Number.isInteger(mentions) || total < 1 || mentions < 0 || mentions > total || total > 100000) {
    result.textContent = 'Vérifiez les nombres : le lot doit contenir au moins un avis et les mentions ne peuvent pas dépasser le total.';
    return;
  }
  const percent = new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 1 }).format((mentions / total) * 100);
  result.textContent = `${mentions} avis sur ${total} mentionnent ce thème, soit ${percent} % de ce lot. Ce résultat ne représente pas tous les clients : vérifiez les faits avant de conclure.`;
});
