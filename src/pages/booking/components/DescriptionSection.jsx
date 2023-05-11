const DescriptionSection = ({ place }) => {

  return (
    <>
      <h5>What this place offers</h5>

      <p className="text-muted mt-3">
        {place.descriptions}
      </p>

      <h5>Facilities</h5>
      <ul>
        {
          place.facilities.map((facility, i) => <li key={i}>{facility}</li>)
        }
      </ul>

  </>
  )
}

export default DescriptionSection