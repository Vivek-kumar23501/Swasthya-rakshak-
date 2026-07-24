function Settings() {
  return (
    <div className="mx-auto max-w-2xl">
      <h2 className="text-2xl font-semibold text-[#0b1f24] mb-6">Settings</h2>

      <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm space-y-5">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-[#0b1f24]">Email notifications</span>
          <input type="checkbox" className="h-4 w-4 accent-[#0d5c63]" />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-[#0b1f24]">Dark mode</span>
          <input type="checkbox" className="h-4 w-4 accent-[#0d5c63]" />
        </div>

        <button className="rounded-lg bg-[#0d5c63] px-4 py-2 text-sm font-medium text-white hover:bg-[#0b4a50]">
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default Settings;