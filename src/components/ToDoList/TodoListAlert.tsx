import React from 'react';

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export function alertTask() {
  const addTask = () => toast("задача добавлена!");
  const deleteTask = () => toast("задача удалена!"); // Убедитесь, что это объявление единственное
  const completedTask = () => toast("задача выполнена!");

  return (
      <div>
        <ToastContainer />
        {/* Добавьте кнопки для тестирования */}
      </div>
  );
}
