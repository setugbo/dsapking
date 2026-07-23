export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#C9A84C]/20 border-t-[#C9A84C]" />
        <p className="text-sm font-medium text-gray-500">Loading...</p>
      </div>
    </div>
  );
}
