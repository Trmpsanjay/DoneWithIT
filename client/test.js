const categories = [
    { label : 'Furniture' , value : 1},
    { label : 'Clothing' , value : 2},
    { label : 'Cameras' , value : 3},
  ];
  
  
  
  
  
  export default function App() {
    const [category, setCategory] = useState( categories[0])
    return (
      <SafeAreaView style = {{paddingTop : 40}}>
  
       <AppPicker selectedItem = {category} onSelectItem = {(item)=>setCategory(item)} items = {categories} placeholder = "Categories" icon = "apps" />
       <AppTextInput placeholder = "email" icon = "email" />
      </SafeAreaView>
      
  
    
        
        
    
    );
  }
  
  const styles = StyleSheet.create({
    
  });
  