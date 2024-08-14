#![cfg_attr(all(not(debug_assertions), target_os = "windows"), windows_subsystem = "windows")]

use tauri::Manager;


fn main() {
  tauri::Builder::default().setup(|app| {
    let window = app.get_window("main").unwrap();

    window.show().unwrap();

    let current_monitor = match tauri::Window::primary_monitor(&window).unwrap() {
      Some(monitor) => monitor,
      None => panic!("No monitor found"),
    };

    let position = current_monitor.position();
    let size = current_monitor.size();

    window.set_position(tauri::PhysicalPosition {
      x: position.x,
      y: position.y,
    }).unwrap();

    window.set_size(tauri::Size::Physical(tauri::PhysicalSize {
      width: size.width,
      height: size.height,
    })).unwrap();

    window.set_decorations(false).unwrap();

    window.show().unwrap();
    window.set_skip_taskbar(true).unwrap();

    return Ok(());
  }).run(
    tauri::generate_context!()
  ).expect(
    "error while running tauri application"
  );
}