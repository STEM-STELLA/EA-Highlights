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
      name: "Mike Taylor",
      role: "STELLA Team Lead / SME",
      type: "leader",
      city: "Goddard, MD",
      lat: 38.9896,
      lng: -76.8533,
      photo: "images/profiles/MikeTaylor.png",
      linkedIn: "https://www.linkedin.com/in/michael-taylor-6b538a37/",
      website: "https://science.gsfc.nasa.gov/stella/"
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