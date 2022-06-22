export default credits = () => {
  const div = document.createElement('div')
  const style = {
    position: 'fixed',
    zIndex: '10000',
    bottom: '20px',
    left: '20px',
    fontFamily: 'sans-serif',
    userSelect: 'none',
    lineHeight: '1',
  }
  Object.assign(div.style, style)
  div.innerHTML = `
    <a href="https://linktr.ee/supahfunk" target="_blank" rel="noreferrer" style="text-decoration: none; color: inherit;">
      <h1 style="margin: -2px 0 0; padding: 0; font-size: 10px; font-weight: normal; line-height: 1">Fabio Ottaviani</h1>
      <h2 style="margin: -1px 0; font-size: 14.1px; font-weight: normal;">Supahfunk</h2>
    </a>
  `
  document.body.appendChild(div)
}