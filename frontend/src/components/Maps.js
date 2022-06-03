import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import hospital from "../assets/hospital.png";
import ngo from "../assets/ngo.png";
import pet from "../assets/pet.png";
import oldAge from "../assets/oldAge.png";
import { Link } from "react-router-dom";

import osm from "./osm-providers";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "leaflet/dist/leaflet.css";
import hospitaljpeg from "../assets/hospital.jpeg";
import { Card } from "@material-ui/core";
import { Button } from "@material-ui/core";

import { Icon } from "leaflet";
import "../App.css";
const position = [51.505, -0.09];

const HospitalIcon = new Icon({
  iconUrl: hospital,
  iconSize: [40, 40],
});
const NGOIcon = new Icon({
  iconUrl: ngo,
  iconSize: [60, 60],
});
const PetIcon = new Icon({
  iconUrl: pet,
  iconSize: [60, 60],
});
const OldAgeIcon = new Icon({
  iconUrl: oldAge,
  iconSize: [60, 60],
});
function Map() {
  const [value, setValue] = useState(1);
  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(value);
  };
  return (
    <div style={{ backgroundColor: "#87d5fa", paddingTop: "20px" }}>
      <div style={{ marginTop: "100px", marginLeft: "200px" }}>
        <h1>Maps</h1>
        Search the nearest
        <Select
          style={{ marginLeft: "30px" }}
          label="Currency"
          onChange={handleChange}
        >
          <MenuItem value={1}>NGO</MenuItem>
          <MenuItem value={2}>Hospital</MenuItem>
          <MenuItem value={3}>Pet Adoption Center</MenuItem>
          <MenuItem value={4}>Old Age Home</MenuItem>
          <MenuItem value={5}>Orphanage Home</MenuItem>
        </Select>
        {/* <Button className={classes.button} onClick={handleOpen}>
        Open the select
      </Button> */}
        {/* <FormControl>
        <InputLabel id="demo-controlled-open-select-label">Age</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl> */}
        <br />
        <br />
        {value === 1 ? (
          <Card
            style={{
              marginBottom: "30px",
              borderRadius: "30px",
              boxShadow: "5px 5px 25px 5px black",
              width: "60%",
              paddingLeft: "10px",
            }}
          >
            <div style={{ margin: "10px" }}>
              <h2>NGO Buddy</h2>
              <p>
                Vile Parle, near D. J. Sanghvi of College Engineering, Mumbai -
                400093
              </p>
              <img
                src="https://images.hindustantimes.com/img/2021/10/30/1600x900/Life_beyond_Numbers_1635579657650_1635579881820.PNG"
                alt="hospital-img"
                style={{ width: "200px", borderRadius: "30px" }}
              />
              <br />
              <Button
                style={{ margin: "10px" }}
                variant="contained"
                color="primary"
              >
                View on Map
              </Button>
            </div>
          </Card>
        ) : (
          ""
        )}
        {value === 2 ? (
          <Card
            style={{
              marginBottom: "30px",
              borderRadius: "30px",
              boxShadow: "5px 5px 25px 5px black",
              width: "60%",
              paddingLeft: "10px",
            }}
          >
            <div style={{ margin: "10px" }}>
              <h2>Cooper Hospital</h2>
              <p>Andheri, near N. D. Bhuta School, Mumbai - 400093</p>
              <img
                src={hospitaljpeg}
                alt="hospital-img"
                style={{ width: "200px", borderRadius: "30px" }}
              />
              <br />
              <Button
                style={{ margin: "10px" }}
                variant="contained"
                color="primary"
              >
                View on Map
              </Button>
            </div>
          </Card>
        ) : (
          ""
        )}
        {value === 3 ? (
          <Card
            style={{
              marginBottom: "30px",
              borderRadius: "30px",
              boxShadow: "5px 5px 25px 5px black",
              width: "60%",
              paddingLeft: "10px",
            }}
          >
            <div style={{ margin: "10px" }}>
              <h2>Paw Life</h2>
              <p>Marol, near Arey Colony, Mumbai - 400093</p>
              <img
                src="data:image/jpeg;base64,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"
                alt="hospital-img"
                style={{ width: "200px", borderRadius: "30px" }}
              />
              <br />
              <Button
                style={{ margin: "10px" }}
                variant="contained"
                color="primary"
              >
                View on Map
              </Button>
            </div>
          </Card>
        ) : (
          ""
        )}
        {value === 4 ? (
          <Card
            style={{
              marginBottom: "30px",
              borderRadius: "30px",
              boxShadow: "5px 5px 25px 5px black",
              width: "60%",
              paddingLeft: "10px",
            }}
          >
            <div style={{ margin: "10px" }}>
              <h2>Second Innings Home</h2>
              <p>Vile Parle, near Prime Mall, Mumbai - 400093</p>
              <img
                src="data:image/jpeg;base64,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"
                alt="hospital-img"
                style={{ width: "200px", borderRadius: "30px" }}
              />
              <br />
              <Button
                style={{ margin: "10px" }}
                variant="contained"
                color="primary"
              >
                View on Map
              </Button>
            </div>
          </Card>
        ) : (
          ""
        )}
        {value === 5 ? (
          <Card
            style={{
              marginBottom: "30px",
              borderRadius: "30px",
              boxShadow: "5px 5px 25px 5px black",
              width: "60%",
              paddingLeft: "10px",
            }}
          >
            <div style={{ margin: "10px" }}>
              <h2>Sneh Sadan</h2>
              <p>Andheri West, near PASS Turf, Mumbai - 400093</p>
              <img
                src="data:image/jpeg;base64,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"
                alt="hospital-img"
                style={{ width: "200px", borderRadius: "30px" }}
              />
              <br />
              <Button
                style={{ margin: "10px" }}
                variant="contained"
                color="primary"
              >
                View on Map
              </Button>
            </div>
          </Card>
        ) : (
          ""
        )}
      </div>
      <MapContainer
        // center={[20.5937, 78.9629]}
        center={[19.096893719743967, 72.87301867005657]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker
          position={[19.118489372974334, 72.84769237070836]}
          icon={HospitalIcon}
        >
          <Popup>Sanjeevni Hospital</Popup>
          <Tooltip>Hospital</Tooltip>
        </Marker>
        <Marker
          position={[19.097402926365827, 72.84048259291649]}
          icon={HospitalIcon}
        >
          <Popup>Bhagvati Hospital</Popup>
          <Tooltip>Hospital</Tooltip>
        </Marker>

        <Marker
          position={[19.13300501737811, 72.82511889968112]}
          icon={HospitalIcon}
        >
          <Popup>Kokilaben Hospital</Popup>
          <Tooltip>Hospital</Tooltip>
        </Marker>
        <Marker
          position={[19.125220249400012, 72.84056842352086]}
          icon={HospitalIcon}
        >
          <Popup>Lion Kartar Hospital</Popup>
          <Tooltip>Hospital</Tooltip>
        </Marker>

        <Marker
          position={[19.132599569769315, 72.84305751347281]}
          icon={HospitalIcon}
        >
          <Popup>Shinde Medicare</Popup>
          <Tooltip>Hospital</Tooltip>
        </Marker>
        <Marker
          position={[19.138447155405117, 72.83631362670448]}
          icon={HospitalIcon}
        >
          <Popup>Urology and Laproscopy Hospital</Popup>
          <Tooltip>Hospital</Tooltip>
        </Marker>

        <Marker
          position={[19.12996119066137, 72.86295401803125]}
          icon={HospitalIcon}
        >
          <Popup>Shakuntala Hospital</Popup>
          <Tooltip>Hospital</Tooltip>
        </Marker>
        <Marker
          position={[19.13637485246936, 72.83797218710289]}
          icon={HospitalIcon}
        >
          <Popup>Shraddha Vihar Hospital</Popup>
          <Tooltip>Hospital</Tooltip>
        </Marker>

        <Marker
          position={[19.129556070395108, 72.86676989952774]}
          icon={HospitalIcon}
        >
          <Popup>Holy Spirit Hospital</Popup>
          <Tooltip>Hospital</Tooltip>
        </Marker>
        <Marker
          position={[19.120789525496406, 72.87170603047608]}
          icon={HospitalIcon}
        >
          <Popup>Nakshatra Hospital</Popup>
          <Tooltip>Hospital</Tooltip>
        </Marker>

        <Marker
          position={[19.110798971439966, 72.86445247133392]}
          icon={HospitalIcon}
        >
          <Popup>Shakuntala Hospital</Popup>
          <Tooltip>Hospital</Tooltip>
        </Marker>
        <Marker
          position={[19.118649786424008, 72.87785231227619]}
          icon={HospitalIcon}
        >
          <Popup>Seven Hills Hospital</Popup>
          <Tooltip>Hospital</Tooltip>
        </Marker>

        <Marker
          position={[19.11808211017283, 72.88261591546012]}
          icon={HospitalIcon}
        >
          <Popup>Sagun Hospital</Popup>
          <Tooltip>Hospital</Tooltip>
        </Marker>
        <Marker
          position={[19.107620298746003, 72.86562143924402]}
          icon={HospitalIcon}
        >
          <Popup>Kiran Care Hospital</Popup>
          <Tooltip>Hospital</Tooltip>
        </Marker>

        <Marker
          position={[19.096358274879268, 72.84005737978224]}
          icon={HospitalIcon}
        >
          <Popup>Nanavati Hospital</Popup>
          <Tooltip>Hospital</Tooltip>
        </Marker>
        <Marker
          position={[19.086279742069337, 72.83784667350511]}
          icon={HospitalIcon}
        >
          <Popup>Surya Hospital</Popup>
          <Tooltip>Hospital</Tooltip>
        </Marker>

        <Marker
          position={[19.129908056268512, 72.86977044149695]}
          icon={HospitalIcon}
        >
          <Popup>Goel Hospital</Popup>
          <Tooltip>Hospital</Tooltip>
        </Marker>
        <Marker
          position={[19.095822546721845, 72.89889772773857]}
          icon={HospitalIcon}
        >
          <Popup>Disha Hospital</Popup>
          <Tooltip>Hospital</Tooltip>
        </Marker>

        <Marker position={[19.1241345338177, 72.85298453051851]} icon={NGOIcon}>
          <Popup>NGO</Popup>
          <Tooltip>Aashayein Foundation</Tooltip>
        </Marker>
        <Marker
          position={[19.130784089732025, 72.83779249870113]}
          icon={NGOIcon}
        >
          <Popup>NGO</Popup>
          <Tooltip>Suvidha NGO</Tooltip>
        </Marker>
        <Marker
          position={[19.11111846999479, 72.84890757280697]}
          icon={NGOIcon}
        >
          <Popup>NGO</Popup>
          <Tooltip>Rural Development NGO</Tooltip>
        </Marker>

        <Marker
          position={[19.109983063685892, 72.85573111253848]}
          icon={NGOIcon}
        >
          <Popup>NGO</Popup>
          <Tooltip>Panchsheel NGO</Tooltip>
        </Marker>

        <Marker
          position={[19.111726719965983, 72.87066565228893]}
          icon={NGOIcon}
        >
          <Popup>NGO</Popup>
          <Tooltip>Tarang NGO</Tooltip>
        </Marker>

        <Marker
          position={[19.094937782570454, 72.8469763790944]}
          icon={NGOIcon}
        >
          <Popup>NGO</Popup>
          <Tooltip>Kindness Welfare</Tooltip>
        </Marker>
        <Marker
          position={[19.10187237944472, 72.84182653781086]}
          icon={NGOIcon}
        >
          <Popup>NGO</Popup>
          <Tooltip>Socio Help</Tooltip>
        </Marker>

        <Marker
          position={[19.119913676374996, 72.83950832949583]}
          icon={PetIcon}
        >
          <Popup>Pet Adoption</Popup>
          <Tooltip>Friends of Paws</Tooltip>
        </Marker>
        <Marker
          position={[19.068004190641233, 72.8391650067497]}
          icon={PetIcon}
        >
          <Popup>Pet Adoption</Popup>
          <Tooltip>YODA Rehabitation</Tooltip>
        </Marker>

        <Marker
          position={[19.129158344436004, 72.85409954620606]}
          icon={PetIcon}
        >
          <Popup>Pet Adoption</Popup>
          <Tooltip>MAA Foundation</Tooltip>
        </Marker>
        <Marker
          position={[19.100611737915614, 72.8837969637457]}
          icon={PetIcon}
        >
          <Popup>Pet Adoption</Popup>
          <Tooltip>Buffalo Cattle Shed</Tooltip>
        </Marker>

        <Marker
          position={[19.11504123484604, 72.84088155729029]}
          icon={OldAgeIcon}
        >
          <Popup>Old Age Home</Popup>
          <Tooltip>BHN Association</Tooltip>
        </Marker>
        <Marker
          position={[19.11343864123672, 72.86314831003244]}
          icon={OldAgeIcon}
        >
          <Popup>Old Age Home</Popup>
          <Tooltip>Suyash Nursing Home</Tooltip>
        </Marker>

        <Marker
          position={[19.11122042500645, 72.8331395938787]}
          icon={OldAgeIcon}
        >
          <Popup>Old Age Home</Popup>
          <Tooltip>Aarambh Aaji Healthcare</Tooltip>
        </Marker>
        <Marker
          position={[19.120961066015365, 72.85161434796963]}
          icon={OldAgeIcon}
        >
          <Popup>Old Age Home</Popup>
          <Tooltip>Carewell Nursing Home</Tooltip>
        </Marker>
        <Link to="https://www.google.com/maps/place/Navjivan+Maternity+%26+Surgical+Nursing+Home/@19.0915758,72.8574708,13.75z/data=!4m9!1m2!2m1!1sold+age+homes+in+ville+parle!3m5!1s0x3be7c9b308424569:0x80b78f430012a7ce!8m2!3d19.0973495!4d72.8493972!15sChxvbGQgYWdlIGhvbWVzIGluIHZpbGxlIHBhcmxlkgEcb2JzdGV0cmljc19neW5lY29sb2d5X2NsaW5pYw?hl=en">
          <Marker
            position={[19.100304881548656, 72.84920310381105]}
            icon={OldAgeIcon}
          >
            <Popup>Old Age Home</Popup>
            <Tooltip>Navjivan Nursing Home</Tooltip>
          </Marker>
        </Link>
      </MapContainer>
    </div>
  );
}

export default Map;
