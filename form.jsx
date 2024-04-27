import "./form.css"
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button, Checkbox } from "@mui/material";
import { useState } from "react";



export default function Form(){
    let [subjects,setsubjects]=useState({
        math:false,
        physics:false,
        programming:false

    })
    let [Formdata,setFormdata]=useState({
        Firstname:"",
        Lastname:"",
        Email:"",
        Contact:"",
        Gender:"",
        subjects:[],
        Resume:"",
        Url:"",
        Skill:"",
        About:""
    })

    let handleinputdata=(event)=>{
        setFormdata((current)=>{
            return {...current,[event.target.name]:event.target.value}
        })
    }

    const handleSubjectChange = (sub) => {
        setsubjects((prev) => ({
            ...prev,
            [sub]: !prev[sub],
        }));
    };

        


 

    let handlesubmit=(event)=>{
        event.preventDefault();
        console.log(Formdata);
        console.log(subjects)
        setFormdata({
            Firstname:"",
            Lastname:"",
            Email:"",
            Contact:"",
            Gender:"",
            subjects:[],

            Resume:"",
            Url:"",
            Skill:"",
            About:""

        });
        setsubjects({
            math:false,
            physics:false,
            programming:false
        })


    }

    let  Reset=()=>{
        setFormdata({
            Firstname:"",
            Lastname:"",
            Email:"",
            Contact:"",
            Gender:"",
            subjects:[],
            Resume:"",
            Url:"",
            Skill:"",
            About:""

        });
        setsubjects({
            math:false,
            physics:false,
            programming:false
        })
  

    }






    return(
        <div className="Box"><br></br>
            <h2 className="heading" >Form in React</h2>
            <form className="form" method="get" onSubmit={handlesubmit} >
                <label htmlFor=""  style={{marginLeft:"10px"}}>First Name*</label> <br />
                <TextField id="outlined-basic" type="text" value={Formdata.Firstname} name="Firstname"
                variant="outlined" placeholder="John"
                onChange={handleinputdata} 
                style={{width:"380px",marginLeft:"10px"}} 
                />  <br />

                <label htmlFor="" style={{marginLeft:"10px"}} >Last Name*</label> <br />

                <TextField id="outlined-basic" value={Formdata.Lastname} 
                label="" variant="outlined" 
                 placeholder="Kumar" type="text"
                 onChange={handleinputdata}  name="Lastname"

                 style={{width:"380px",marginLeft:"10px"}}
                  />  <br />

                <label htmlFor="" style={{marginLeft:"10px"}}>Enter Email*</label> <br />
                <TextField id="outlined-basic" value={Formdata.Email} type="email"
                label="" variant="outlined"  placeholder="hello@gmail.com"
                onChange={handleinputdata}  name="Email"
                style={{width:"380px",marginLeft:"10px"}} 
                />  


                <label htmlFor="" style={{marginLeft:"10px"}}>Contact*</label> <br />
                <TextField id="outlined-basic" value={Formdata.Contact} 
                label="" variant="outlined" placeholder="97715xxxxx"
                onChange={handleinputdata}  name="Contact" type="number"
                style={{width:"380px",marginLeft:"10px"}}
                 />  

                <FormControl style={{marginLeft:"10px"}}>
                <FormLabel id="demo-radio-buttons-group-label" >Gender</FormLabel>
                <RadioGroup value={Formdata.Gender} onChange={handleinputdata} name="Gender"
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    // name="radio-buttons-group"
                >
                    <div style={{display:"flex",gap:"20px",marginLeft:"29px"}}>
                        <FormControlLabel value="female" control={<Radio />} label="Female"  />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </div>
                </RadioGroup>
                </FormControl>
                    <br />
                <label htmlFor="" style={{marginLeft:"10px"}} > Your Best Subject</label> <br />
                <div style={{marginLeft:"29px",marginLeft:"25px"}}>
                    <input
                        type="checkbox"
                        name="lang"
                        id="maths"
                        checked={subjects.math}
                        onChange={(e) => handleSubjectChange("math")}
                    />
                    Maths
                    <input
                        type="checkbox"
                        name="lang"
                        id="physics"
                        checked={subjects.physics}
                        onChange={(e) => handleSubjectChange("physics")}
                    />
                    Physics
                    <input
                        type="checkbox"
                        name="lang"
                        id="programming"
                        checked={subjects.programming}
                        onChange={(e) => handleSubjectChange("programming")}
                    />
                    Programming
                </div>


                <label htmlFor="" style={{marginLeft:"10px"}}>Upload Resume*</label> <br />

                <TextField id="outlined-basic" label=""
                value={Formdata.Resume} variant="outlined"
                type="file" onChange={handleinputdata}
                name="Resume"
                 style={{width:"380px",marginLeft:"10px"}} 
                />  

                <label htmlFor="" style={{marginLeft:"10px"}}>Enter URL*</label> <br />
                
                <TextField id="outlined-basic" label=""
                value={Formdata.Url} variant="outlined" 
                placeholder="htttp//.linkpdf.pdf" 
                onChange={handleinputdata} name="Url" type="url"
                style={{width:"380px",marginLeft:"10px"}} 
                 />  
                
                <label htmlFor="" style={{marginLeft:"10px"}}>Select any option..</label> <br />
                <select className="select" value={Formdata.Skill} onChange={handleinputdata} name="Skill"> 
                    <option value="Select any option">Select any option</option>
                    <option value="Html" >Html</option>
                    <option value="css">Css</option>
                    <option value="javascript">JavaScript</option>
                    <option value="react">React</option>
                    <option value="node.js">Node.js</option>
                    <option value="Sql">Sql</option>
                   

                </select>
                <label htmlFor="" style={{marginLeft:"10px"}}>About</label> <br />
                <textarea placeholder="About your self" rows="8" cols="49"
                 value={Formdata.About} style={{marginLeft:"10px"}}
                 onChange={handleinputdata} name="About" type="text"
                 ></textarea>
                <div className="buttonx">
                    <Button  variant="contained" onClick={Reset} style={{padding:"0 25px"}}>Reset</Button>
                    <Button variant="contained" color="success" type="submit" style={{padding:"7px 25px"}}>Submit</Button>
                </div>



                


            

            </form>
            

        
        
        </div>

    );
}