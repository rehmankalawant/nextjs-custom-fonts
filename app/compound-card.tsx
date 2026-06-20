import CardOne from "./(cards)/card-1"
import CardTwo from "./(cards)/card-2"
import CardThree from "./(cards)/card-3"
import CardFour from "./(cards)/card-4"
import CardFive from "./(cards)/card-5"

const CompoundCards = ({ className }: React.ComponentProps<"div">) => {
  return (
    <>
      <div className={`mb-10 ${className}`}>
        <div className="flex justify-center">
          <CardFour />
          <CardTwo />
        </div>
        <div className="flex justify-start">
          <CardOne />
          <CardThree />
          <CardFive />
        </div>
      </div>
    </>
  )
}

export default CompoundCards
