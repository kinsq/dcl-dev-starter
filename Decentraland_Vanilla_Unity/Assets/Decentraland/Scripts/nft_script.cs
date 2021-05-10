using UnityEngine;
using System;
using UnityEditor;

[SelectionBase]
[ExecuteInEditMode]
public class nft_script : MonoBehaviour
{
    [TextArea]
    public string Usage = "Smart Contract and Token ID is always needed, the rest is optional";

    [Header("Debug Settings")]
    public bool ShowDummy = false;
    public GameObject Dummy;
   // public bool CleanBoxes;
    public bool ResetScale;


    [Space(20)]

    [Header("NFT Display Settings")]
    public string smartContract;
    public string tokenId;


    public string title;
    public string autor;
    public string owner;
    public string hoverText = "More info";
    [TextArea]
    public string description;

    // [Header("Size by default")]
    private float SizeX = 6f;
    private float SizeY = 6f;
    private float SizeZ = 0.06f;

    // This command lets write "right click" executions 
   
    void Awake() 
    {
        gameObject.transform.localScale = new Vector3(SizeX, SizeY, SizeZ);

    }
    void Update()
    {

        if (ShowDummy == true)
        {

            Dummy.SetActive(true);

        }
        else
        {

            Dummy.SetActive(false);

        }
                
       
        /* if (CleanBoxes == true) 
        {

            CleanText();

        }
         */
        
        
        

        if (ResetScale == true)
        {
            gameObject.transform.localScale = new Vector3(SizeX, SizeY, SizeZ);
            ResetScale = false;
        }
    }

    [ContextMenu("Nuke UI")]
    void NukeUI()
        {
            autor = ("");
            title = ("");
            owner = ("");
            description = ("");
            Debug.Log("Nuked All the UI");
        }

[ContextMenu("AddPrefix")]
    void ExecutePrefix()
    {
        autor = "Made by " + autor;
        owner = "Owned by " + owner;
        Debug.Log("Added Prefixes");
    }
    [ContextMenu("DeletePrefix")]
    void NukePrefix() 
     {
         autor = autor.Replace("Made by ", "");
         owner = owner.Replace("Owned by ", "");
         Debug.Log("Deleted Prefixes");

    }
    [ContextMenu("Nuke All")]
    void NukeAll() {
        autor = ("");
        smartContract = ("");
        title = ("");
        owner = ("");
        description = ("");
        tokenId = ("");
        Debug.Log("Nuked All the TextBoxes");
    }
    
        
            
        


private void OnGUI()
    {
        GUILayout.Label("Hello");
    }


    /*  void CleanText() 
      { 

          autor.Replace("\"", "\\"");
          title.Replace("\"", "\\"");
          owner.Replace("\"", "\\"");
          description.Replace("\"", "\\"");
          CleanBoxes = false;

          Debug.Log("Cleaned Textes from NFT Script");

      }
    */


}