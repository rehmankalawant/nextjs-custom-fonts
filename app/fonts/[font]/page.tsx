import CompoundCards from "../../compound-card"

export default async function page({
  params,
}: {
  params: Promise<{ font: string }>
}) {
  const { font } = await params

  console.log(`Font name is ${font}`)

  return (
    <>
      <CompoundCards font={font} />
    </>
  )
}

// Note -
// The only condition is that the variable-name-in-global-css-for-the-font must be exact same to the url i.e.
{
  /*
  
{
  title: "Barriecito",
  url: "/font-barriecito",
}

*/
}
