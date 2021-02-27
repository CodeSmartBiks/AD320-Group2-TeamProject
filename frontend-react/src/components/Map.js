

function Map(props) {
    return (
        <div className="mapimage">
            {/* <h2>CART LOCATIONS</h2> */}
            <img className="desktop" src={`${window.location.origin}/MapForCartLocation.JPG`} />
            <img className="mobile" src={`${window.location.origin}/Mobile_Map.PNG`} />
        </div>
    )
}

export default Map;