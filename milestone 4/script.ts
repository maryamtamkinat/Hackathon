const resumeform = document.getElementById ('resume-form') as HTMLFormElement
const generatedresume = document.getElementById ('get-resume') as HTMLElement

resumeform.addEventListener('submit', (event : Event) => {
    event.preventDefault();

    const name = (document.getElementById ('name') as HTMLInputElement).value
    const email = (document.getElementById ('email') as HTMLInputElement).value
    const phone = (document.getElementById ('phone') as HTMLInputElement).value
    const education = (document.getElementById ('education') as HTMLInputElement).value
    const experience = (document.getElementById ('experience') as HTMLInputElement).value
    const skills = (document.getElementById ('skills') as HTMLInputElement).value

    //generated resume
    const resumeHTML = `
   <h2><b>Resume</b></h2>
    <h3>Personal Information:</h3> 
    <p><b>Name:</b><span contenteditable="true">${name}</span></p>
    <p><b>Email:</b><span contenteditable="true">${email}</span></p>
    <p><b>Phone:</b><span contenteditable="true">${phone}</span></p>

    <h3>Education:</h3> 
    <p contenteditable="true">${education}</p>

    <h3>Experience:</h3> 
    <p contenteditable="true">${experience}</p>

    <h3>Skills:</h3> 
    <p contenteditable="true">${skills}</p>
`
 // your resume will be display
  if (generatedresume) {
    generatedresume.innerHTML = resumeHTML;
  } else {
    console.error('keywords is missing');
  }

} )