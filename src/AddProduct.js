import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import AddIcon from '@mui/icons-material/Add';
import { useFormik } from "formik";
import * as yup from "yup";


const formValidationSchema = yup.object({
  brand: yup
    .string()
    .min(5, "Need bigger brand name")
    .required("fill brand name please"),
  image: yup
    .string()
    .min(8, "require longer image url")
    .required("fill image url please"),
  price: yup
    .string("enter product price")
    .min(0, "require price greater than 0")
    .required("fill price please"),
  name: yup
    .string()
    .min(5, "require longer name")
    .required("fill name please"),
    rating: yup
    .number()
    .min(0, "require rating greater than 0")
    .max(5, "require rating less than 5")
    .required("fill rating please"),
    specification: yup
    .string()
    .min(10, "require longer specification")
    .required("fill specification please"),
    released: yup
    .string()
    .min(10, "require longer released date")
    .required("fill released date please"),
    body: yup
    .string()
    .min(10, "require longer dimension")
    .required("fill dimension please"),
    software: yup
    .string()
    .min(10, "require longer software info")
    .required("fill software info please"),
})

export function AddProduct() {
  const history = useHistory();
const {
  handleSubmit,
  values,
  handleChange,
  handleBlur,
  errors,
  touched,
} = useFormik({
  initialValues:{
brand:"",
name:"",
image:"",
price:"",
rating:"",
specification:"",
released:"",
body:"",
software:"",
},
 validationSchema: formValidationSchema,
onSubmit:(newProduct)=>{
  addBtn(newProduct);
}
});

  const addBtn = (newProduct) => {
    fetch(`https://6166c4db13aa1d00170a66fd.mockapi.io/products`,
      {
        method: "POST",
        body: JSON.stringify(newProduct),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(() => history.push("/"));
  };
  return (
  <form className="inputs" onSubmit={handleSubmit}>
   <TextField 
   value={values.brand} 
   onChange={handleChange} 
   onBlur={handleBlur}
   id="brand"
   name="brand" 
   label="Enter Brand Name" 
   variant="standard"
   error={errors.brand && touched.brand} 
   helperText={errors.brand && touched.brand && errors.brand}
   />
   <TextField
     value={values.image} 
     onChange={handleChange} 
     onBlur={handleBlur}
     id="image"
     name="image" 
      label="Enter Product Image Url"
       variant="standard"
       error={errors.image && touched.image} 
       helperText={errors.image && touched.image && errors.image}
       />
          <TextField
      value={values.name} 
      onChange={handleChange} 
      onBlur={handleBlur}
      id="name"
      name="name" 
       label="Enter Product Name" 
       variant="standard"
       error={errors.name && touched.name}
       helperText={errors.name && touched.name && errors.name}
        />
          <TextField 
    value={values.price} 
    onChange={handleChange} 
    onBlur={handleBlur}
    id="price"
    name="price" 
     label="Enter Product Price"
      variant="standard"
      error={errors.price && touched.price}
      helperText={errors.price && touched.price && errors.price} 
      />
   <TextField
     value={values.rating} 
     onChange={handleChange} 
     onBlur={handleBlur}
     id="rating"
     name="rating" 
       label="Enter Product Rating" 
       variant="standard"
       error={errors.rating && touched.rating}
       helperText={errors.rating && touched.rating && errors.rating} 
       />
   <TextField
    value={values.specification} 
    onChange={handleChange} 
    onBlur={handleBlur}
    id="specification"
    name="specification"  
      label="Enter Product Specification" 
      variant="standard"
      error={errors.specification && touched.specification}
      helperText={errors.specification && touched.specification && errors.specification} 
      />
   <TextField
      value={values.released} 
      onChange={handleChange} 
      onBlur={handleBlur}
      id="released"
      name="released" 
       label="Enter Product Released Date"
        variant="standard"
        error={errors.released && touched.released}
        helperText={errors.released && touched.released && errors.released}
         />
   <TextField
      value={values.body} 
      onChange={handleChange} 
      onBlur={handleBlur}
      id="body"
      name="body" 
       label="Enter Body Dimension"
        variant="standard"
        error={errors.body && touched.body}
        helperText={errors.body && touched.body && errors.body} 
        />
           <TextField
      value={values.software} 
      onChange={handleChange} 
      onBlur={handleBlur}
      id="software"
      name="software" 
       label="Enter software Details"
        variant="standard"
        error={errors.software && touched.software}
        helperText={errors.software && touched.software && errors.software} 
        />
         <div className="addSaveBtn">
        <Button className="button" type="submit" variant="outlined" startIcon={<AddIcon />}>Add Product</Button>
        </div>
        <div>
        <Button variant="text" onClick={() => history.goBack()} startIcon={<KeyboardBackspaceIcon />}>Back
        </Button>
        </div>
     </form>
  );
}