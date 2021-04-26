using UnityEngine;
using System;

[ExecuteInEditMode]
public class nft_script_copycat : MonoBehaviour
{
    public GameObject COG;
    public GameObject LinkButton;
    public Transform LinkTrans;
    public GameObject DebugText;
    

    [TextArea]
    public string Usage = "Use the hhhcontext menu to operate the CopyCat name system";

  

    void Start()
    {

        
        DoNaming();
        DoLinkNaming();
    
       
    }

    [ContextMenu("Do Naming")]
    void DoNaming()
    {
        // gameObject.name = transform.root.gameObject.name;
        COG.name = "COG " + transform.gameObject.name;
        DebugText.GetComponent<TextMesh>().text = transform.gameObject.name;
        //new line
    }

    [ContextMenu("LinkChilding")]
    void DoLinkNaming()
    {
        LinkTrans = gameObject.transform.Find("LinkBox_Art");
        if (LinkTrans != null)
        {
            LinkButton = LinkTrans.gameObject;
        }
        // gameObject.name = transform.root.gameObject.name;
        LinkButton.name = "LinkBox_Art " + transform.gameObject.name;
        DebugText.GetComponent<TextMesh>().text = transform.gameObject.name;
        //new line
    }


}

