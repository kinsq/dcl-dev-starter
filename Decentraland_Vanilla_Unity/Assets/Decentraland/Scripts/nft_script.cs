using UnityEngine;
using System;

[SelectionBase]
[ExecuteInEditMode]
public class nft_script : MonoBehaviour
{
    [TextArea]
    public string Usage = "Smart Contract and Token ID is always needed, the rest is optional";

    [Header("Debug Settings")]
    public bool ShowDummy = false;
    public GameObject Dummy;
    public bool WritePrefix;
   // public bool DeletePrefix;
   // public bool CleanBoxes;
    public bool NukeAll;
    public bool NukeUI;
    public bool ResetScale;


    [Space(20)]

    [Header("NFT Display Settings")]
    public string smartContract;
    public string tokenId;


    public string title;
    public string autor;
    public string owner;
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

        if (WritePrefix == true)
        {
            ExecutePrefix();
            WritePrefix = false;

        }
        
        /*  if (DeletePrefix == true)
        {
            NukePrefix();
            DeletePrefix = false;

        }
        */

        /* if (CleanBoxes == true) 
        {

            CleanText();

        }
         */
        if (NukeAll == true)
        {
            autor = ("");
            smartContract = ("");
            title = ("");
            owner = ("");
            description = ("");
            tokenId = ("");
            NukeAll = false;
            Debug.Log("Nuked All the TextBoxes");
        }
        
        if (NukeUI == true)
        {
            autor = ("");
            title = ("");
            owner = ("");
            description = ("");
            NukeUI = false;
            Debug.Log("Nuked All the UI");
        }

        if (ResetScale == true)
        {
            gameObject.transform.localScale = new Vector3(SizeX, SizeY, SizeZ);
            ResetScale = false;
        }
    }
    
    void ExecutePrefix()
    {
        autor = "Made by " + autor;
        owner = "Owned by " + owner;
        Debug.Log("Added Prefixes");
    }

    /* void NukePrefix() 
     {
         autor.Replace("M", "f");
         owner.Replace("Owned by", "-");
         Debug.Log("Deleted Prefixes");

     }
    */

    /*  void CleanText() 
      { 

          autor.Replace("\"", "”");
          title.Replace("\"", "”");
          owner.Replace("\"", "”");
          description.Replace("\"", "”");
          CleanBoxes = false;

          Debug.Log("Cleaned Textes from NFT Script");

      }
    */
   
   
}