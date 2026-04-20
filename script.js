// NAV MENU
function toggleMenu(){
document.getElementById("navLinks").classList.toggle("show");
}

// SUPABASE CONNECTION
const supabaseUrl = "https://ehhulsbpdadaksgcdikc.supabase.co";
const supabaseKey = "sb_publishable_MEy-QlV5IQ_0DM0VcWD4kQ_2WFtEvdh";

const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

// LOAD EVENTS
async function loadEvents(){

let { data, error } = await supabaseClient
.from('events')
.select('*')
.order('id', { ascending: false });

let box = document.getElementById("eventsBox");
box.innerHTML = "";

if(!data){
box.innerHTML = "<p>No events yet.</p>";
return;
}

data.forEach(event => {
box.innerHTML += `
<div class="card">
<h3>${event.title}</h3>
<p>${event.description}</p>
${event.image_url ? `<img src="${event.image_url}" style="width:100%;margin-top:10px;border-radius:10px;">` : ""}
</div>
`;
});

}

loadEvents();