function htmlspecialchars(formData) {
  
  
    formData = formData.replaceAll('&', '&amp;')
    formData = formData.replaceAll('<', '&lt;')
    formData = formData.replaceAll('>', '&gt;')
    formData = formData.replaceAll('"', '&quot;')
    
    return formData
    
  }
