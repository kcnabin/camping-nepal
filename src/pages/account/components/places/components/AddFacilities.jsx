const AddFacilities = ({ facilities, setFacilities }) => {
  const addFacility = e => {
    const { checked, name } = e.target

    if (checked) {
      setFacilities(facilities.concat(name))

    } else if (!checked) {
      setFacilities(facilities.filter(facility => facility !== name))
    }
  }

  const allFacilites = [
    {
      title: 'Outdoor Cookware',
      name: 'cookware',
    },
    {
      title: 'Camping Light',
      name: 'light',
    },
    {
      title: 'Flashlight',
      name: 'flashlight',
    },
    {
      title: 'Portable Power',
      name: 'portable-power',
    },
    {
      title: 'Medicines',
      name: 'medicines',
    },
    {
      title: 'Insect Control',
      name: 'insect-control',
    },
    {
      title: 'Heater',
      name: 'heater',
    },
    {
      title: 'Cooler',
      name: 'cooler',
    },
    {
      title: 'Water Container',
      name: 'water-container',
    }
  ]


  return (
    <div className="d-flex flex-column mb-3">
      <label htmlFor="" className="form-label">
        Facilities
      </label>

      <div className="fw-normal">

        <div className="container-fluid">
          <div className="row">

            {
              allFacilites.map((perk, i) => {
                return (
                  <div className="d-flex align-items-center p-1 col-12 col-sm-6 col-lg-4" key={i}>
                    <input
                      type="checkbox"
                      name={perk.name}
                      onChange={addFacility}
                      checked={facilities.includes(perk.name)}
                    />
                    <span className="ms-2 d-flex align-items-center">
                      {/* {perk.icon} */}
                      <span className="ms-2">
                        {perk.title}
                      </span>
                    </span>
                  </div>
                )
              })
            }

          </div>
        </div>


      </div>
    </div>
  )
}

export default AddFacilities