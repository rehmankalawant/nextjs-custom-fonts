import CardOne from "./(cards)/card-1"
import CardTwo from "./(cards)/card-2"
import CardThree from "./(cards)/card-3"
import CardFour from "./(cards)/card-4"
import CardFive from "./(cards)/card-5"

const CompoundCards = ({ className }: React.ComponentProps<"div">) => {
  return (
    <>
      <div className={`mb-10 px-10 py-6 ${className}`}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          <div className="md:col-span-8">
            <CardFour />

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              <CardOne />
              <CardThree />
            </div>
          </div>

          <div className="md:col-span-4">
            <CardTwo />

            <div className="mt-6">
              <CardFive />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CompoundCards
