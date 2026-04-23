// Keep your footer year
  document.getElementById("year").textContent = new Date().getFullYear();

  // ---- MAP DATA (edit these) ----
  const people = [
    {
      name: "Lily K. Donaldson",
      role: "Computer Science Teacher",
      type: "ambassador", // ambassador | sme | leader
      city: "Stafford, VA",
      lat: 38.422,
      lng: -77.408,
      photo: "images/profiles/LilyDonaldson.PNG",
      linkedIn: "https://www.linkedin.com/in/lilykdonaldson/",
      website: "https://lilykdonaldson.com/"
    },
    {
      name: "Paul Mirel",
      role: "Creator and Lead Engineer STELLA",
      type: "sme",
      city: "Baltimore, MD",
      lat: 39.2905,
      lng: -76.6104,
      photo: "images/profiles/PaulMirel.png"
    },
    {
      name: "Matthew Pearce",
      role: "NASA Education Program Specialist",
      type: "leader",
      city: "New York, NY",
      lat: 40.7128,
      lng: -74.0060,
      photo: "images/profiles/MatthewPearce.png",
      website: "https://www.giss.nasa.gov/edu/"
    },
    {
      name: "Melissa Sleeper",
      role: "Space and Life Science Teacher",
      type: "ambassador", // ambassador | sme | leader
      city: "Melbourne, FL",
      lat: 28.0794,
      lng: -80.6078,
      photo: "images/profiles/MelissaSleeper.PNG",
      linkedIn: "https://www.linkedin.com/in/melissa-sleeper-2219a5116/",
    },
    {
      name: "Parth Bhatt",
      role: "Assistant Teaching Professor",
      type: "ambassador", // ambassador | sme | leader
      city: "Houghton, MI",
      lat: 47.1211,
      lng: -88.5694,
      photo: "images/profiles/ParthBhatt.PNG",
      linkedIn: "https://www.linkedin.com/in/parthbhatt21/",
    },
    [
{
  name: "Mike Taylor",
  role: "Outreach Scientist - STELLA Team Lead",
  type: "sme",
  city: "Greenbelt, MD",
  lat: 38.995281,
  lng: -76.85021,
  photo: "images/profiles/MikeTaylor.jpg",
  linkedIn: "https://www.linkedin.com/in/michael-taylor-6b538a37/"
},
{
  name: "Trung Tran",
  role: "Associate Professor of Geospatial Science",
  type: "ambassador",
  city: "Fayetteville, NC",
  lat: 35.0728,
  lng: -78.8931,
  photo: "images/profiles/TrungTran.jpg",
  linkedIn: "https://www.linkedin.com/in/tvtran7/"
},
{
  name: "Misty Thomason",
  role: "Education Director",
  type: "ambassador",
  city: "Midland, TX",
  lat: 32.033,
  lng: -102.070,
  photo: "images/profiles/MistyThomas.png",
  linkedIn: ""
},
{
  name: "John Olgin",
  role: "Professor - NASA GLOBE Partner",
  type: "ambassador",
  city: "El Paso, TX",
  lat: 31.7725,
  lng: -106.461,
  photo: "images/profiles/jolgin.jpg",
  linkedIn: "https://www.linkedin.com/in/john-g-olgin-ph-d-9698046/"
},
{
  name: "Audrey Foote",
  role: "Classroom Teacher, Grades 7–12",
  type: "ambassador",
  city: "New York Mills, NY",
  lat: 43.0,
  lng: -75.0,
  photo: "images/profiles/AudreyFoote.jpg",
  linkedIn: ""
},
{
  name: "Aishwarya Chandrasekaran",
  role: "Lecturer",
  type: "ambassador",
  city: "Logan, UT",
  lat: 41.737,
  lng: -111.83,
  photo: "images/profiles/aish_chan.jpg",
  linkedIn: "https://www.linkedin.com/in/aishwarya-chandrasekaran-171ab0137/"
},
{
  name: "Dave Curry",
  role: "Middle School Science Teacher",
  type: "ambassador",
  city: "Newtown, PA",
  lat: 40.2273,
  lng: -74.9496,
  photo: "images/profiles/daveCurry.png",
  linkedIn: "https://www.linkedin.com/in/dave-curry-329b981b5/"
},
{
  name: "Kimberly Campos",
  role: "Classroom Teacher",
  type: "ambassador",
  city: "Bronx, NY",
  lat: 40.8163,
  lng: -73.8656,
  photo: "images/profiles/KimberlyCampos.jpg",
  linkedIn: "https://www.linkedin.com/in/kimberly-campos-50290774/"
},
{
  name: "Peder Nelson",
  role: "Participatory Remote Sensing Leader",
  type: "ambassador",
  city: "Oregon, USA",
  lat: 45.0,
  lng: -123.0,
  photo: "images/profiles/PederNelson.jpg",
  linkedIn: "https://www.linkedin.com/in/peder-nelson-99ab04a0"
},
{
  name: "Dr. Jennifer L. Penland",
  role: "STEM Education Program Specialist",
  type: "ambassador",
  city: "Hampton, VA",
  lat: 37.0,
  lng: -76.3,
  photo: "images/profiles/DrJenniferPenland.jpg",
  linkedIn: "https://www.linkedin.com/in/jennifer-penland-ed-d-67b91741/"
},
{
  name: "Elissa Dee",
  role: "Informal Educator",
  type: "ambassador",
  city: "Noblesville, IN",
  lat: 40.5,
  lng: -86.01,
  photo: "images/profiles/ElissaDee.jpg",
  linkedIn: "https://www.linkedin.com/in/elissa-dee-76b346288/"
},
{
  name: "Dr. Zach Rosch",
  role: "Assistant Principal NYCPS",
  type: "ambassador",
  city: "Staten Island, NY",
  lat: 40.52824,
  lng: -74.193535,
  photo: "images/profiles/ZachRosch.jpeg",
  linkedIn: "https://www.linkedin.com/in/zach-rosch-ed-d-2933871a3"
}
  ];

  // Create the map centered on the US
  const map = L.map("ambassador-map", { scrollWheelZoom: false }).setView([39.8, -98.6], 4);

  // Base map tiles (OSM)
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Colored marker using a CSS circle
  function makePinIcon(type) {
    return L.divIcon({
      className: "",
      html: `<div class="pin ${type}"></div>`,
      iconSize: [22, 22],
      iconAnchor: [11, 11]
    });
  }

  function escapeHTML(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function profilePopupHTML(p) {
    const n = escapeHTML(p.name);
    const r = escapeHTML(p.role);
    const c = escapeHTML(p.city);

    const typeLabels = {
      ambassador: "Ambassador",
      sme: "SME",
      leader: "Program Leader"
    };

    const typeText = typeLabels[p.type] || "";
    const typeClass = `profile-type ${p.type}`;

    // ---- Optional Links ----
    let linksHTML = "";

    if (p.linkedIn) {
      linksHTML += `
        <a href="${p.linkedIn}" target="_blank" rel="noopener noreferrer" class="profile-link">
          <img src="images/LinkedIn_icon.png" alt="LinkedIn">
        </a>
      `;
    }

    if (p.website) {
      linksHTML += `
        <a href="${p.website}" target="_blank" rel="noopener noreferrer" class="profile-link">
          <img src="images/globe.svg" alt="Website">
        </a>
      `;
    }

    return `
      <div class="profile-card">
        <img src="${p.photo}" alt="${n} profile photo" onerror="this.style.display='none'">
        <div class="profile-meta">
          <div class="profile-name">${n}</div>
          <div class="${typeClass}">${typeText}</div>
          <div class="profile-role">${r}</div>
          <div class="profile-loc">${c}</div>
          ${linksHTML ? `<div class="profile-links">${linksHTML}</div>` : ""}
        </div>
      </div>
    `;
  }

  // Add markers
  people.forEach(p => {
    L.marker([p.lat, p.lng], { icon: makePinIcon(p.type) })
      .addTo(map)
      .bindPopup(profilePopupHTML(p), { closeButton: true, maxWidth: 320 });
  });
