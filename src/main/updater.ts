import { autoUpdater } from 'electron-updater'
import log from 'electron-log/main'

export function initAutoUpdater() {
  // Configure logger
  log.transports.file.level = 'info'
  autoUpdater.logger = log

  // Configure auto updater
  autoUpdater.autoDownload = true
  autoUpdater.autoInstallOnAppQuit = true

  // Check for updates
  autoUpdater.checkForUpdatesAndNotify()

  // Event handlers
  autoUpdater.on('checking-for-update', () => {
    log.info('Checking for update...')
  })

  autoUpdater.on('update-available', (info) => {
    log.info('Update available:', info)
  })

  autoUpdater.on('update-not-available', (info) => {
    log.info('Update not available:', info)
  })

  autoUpdater.on('error', (err) => {
    log.error('Error in auto-updater:', err)
  })

  autoUpdater.on('download-progress', (progressObj) => {
    let log_message = 'Download speed: ' + progressObj.bytesPerSecond
    log_message = log_message + ' - Downloaded ' + progressObj.percent + '%'
    log_message = log_message + ' (' + progressObj.transferred + '/' + progressObj.total + ')'
    log.info(log_message)
  })

  autoUpdater.on('update-downloaded', (info) => {
    log.info('Update downloaded:', info)
    // The update will be installed on app quit
  })
}