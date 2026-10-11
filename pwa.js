let installPrompt;
const installButton = document.getElementById('installBtn');

window.addEventListener('beforeinstallprompt', function (event) {
  event.preventDefault();
  installPrompt = event;
  if (installButton) installButton.hidden = false;
});

if (installButton) {
  installButton.addEventListener('click', async function () {
    if (!installPrompt) return;

    installPrompt.prompt();
    await installPrompt.userChoice;
    installPrompt = null;
    installButton.hidden = true;
  });
}

window.addEventListener('appinstalled', function () {
  installPrompt = null;
  if (installButton) installButton.hidden = true;
});

if ('serviceWorker' in navigator && window.location.protocol !== 'file:') {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('./sw.js', { scope: './' }).catch(function (error) {
      console.error('App offline support could not be enabled:', error);
    });
  });
}
