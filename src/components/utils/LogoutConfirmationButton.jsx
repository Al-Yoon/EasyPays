import React from 'react';

const LogoutConfirmationButton = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 relative">

        <div className="my-8 text-center">
          <h4 className="text-gray-800 text-lg font-semibold mt-4">¿Está seguro de que quiere cerrar sesión?</h4>
          <p className="text-sm text-gray-600 mt-4">Si está seguro, haga clic en "Cerrar Sesión".</p>
        </div>
        <div className="flex flex-col space-y-2">
          <button type="button" className="px-4 py-2 rounded-lg text-white text-sm tracking-wide bg-red-500 hover:bg-red-600 active:bg-red-500" onClick={onConfirm}>
            Cerrar Sesión
          </button>
          <button type="button" className="px-4 py-2 rounded-lg text-gray-800 text-sm tracking-wide bg-gray-200 hover:bg-gray-300 active:bg-gray-200" onClick={onCancel}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutConfirmationButton;