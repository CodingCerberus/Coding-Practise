class FileNameExtractor {
    static extractFileName (dFN) {
      
      dFN = dFN.split('_')
      
      dFN.shift()
      
      dFN = dFN.join('_')
      
      dFN = dFN.split('.')
      
      dFN.pop()
      
      return dFN.join('.')
      
    }
}
