import UtensilsIcon from "../../../../svg-icons/UtensilsIcon"


const AddFacilities = ({facilities, setFacilities}) => {
  const addFacility = e => {
    const {checked, name} = e.target
    
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
      icon: <UtensilsIcon />
    }, 
    {
      title: 'Camping Light',
      name: 'light',
      icon: <UtensilsIcon />
    }, 
    {
      title: 'Flashlight',
      name: 'flashlight',
      icon: <UtensilsIcon />
    },
    {
      title: 'Portable Power',
      name: 'portable-power',
      icon: <UtensilsIcon />
    }, 
    {
      title: 'Medicines',
      name: 'medicines',
      icon: <UtensilsIcon />
    }, 
    {
      title: 'Insect Control',
      name: 'insect-control',
      icon: <UtensilsIcon />
    }, 
    {
      title: 'Heater',
      name: 'heater',
      icon: <UtensilsIcon />
    }, 
    {
      title: 'Cooler',
      name: 'cooler',
      icon: <UtensilsIcon />
    }, 
    {
      title: 'Water Container',
      name: 'water-container',
      icon: <UtensilsIcon />
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
            allFacilites.map(perk => {
              return (
                <div className="d-flex align-items-center p-1 col-12 col-sm-6 col-lg-4" key={perk.name}>
                  <input 
                    type="checkbox"
                    name={perk.name}
                    onChange={addFacility}
                    checked={facilities.includes(perk.name)}        
                  />
                  <span className="ms-2 d-flex align-items-center">
                    {perk.icon}
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