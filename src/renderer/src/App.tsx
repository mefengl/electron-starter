function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <div>Powered by electron-vite</div>
      <div>
        Build an Electron app with
        {' '}
        <span>React</span>
        &nbsp;and
        {' '}
        <span>TypeScript</span>
      </div>
      <p>
        Please try pressing
        {' '}
        <code>F12</code>
        {' '}
        to open the devTool
      </p>
      <div>
        <div>
          <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">
            Documentation
          </a>
        </div>
        <div>
          <a target="_blank" rel="noreferrer" onClick={ipcHandle}>
            Send IPC
          </a>
        </div>
      </div>
    </>
  )
}

export default App
