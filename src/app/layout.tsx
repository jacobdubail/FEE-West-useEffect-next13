import '../assets/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gray-100 p-8 border-4 border-white shadow-xl min-h-screen">
				<main className="max-w-3xl mx-auto p-12 bg-white shadow flex flex-col min-h-[60vh]">
					<div className="prose prose-cyan">
						{children}
					</div>
				</main>
			</body>
    </html>
  )
}