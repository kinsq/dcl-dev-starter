using UnityEngine;
using System;

[ExecuteInEditMode]
public class nft_script_copycat : MonoBehaviour
{
    public GameObject COG;
    public GameObject DebugText;
    

    [TextArea]
    public string Usage = "Use the hhhcontext menu to operate the CopyCat name system";

  

    void Start()
    {
    
        DoNaming();
        
    
       
    }

    [ContextMenu("Do Naming")]
    void DoNaming()
    {
        // gameObject.name = transform.root.gameObject.name;
        COG.name = "COG " + transform.gameObject.name;
        DebugText.GetComponent<TextMesh>().text = transform.gameObject.name;
        //new line
    }

    
}

