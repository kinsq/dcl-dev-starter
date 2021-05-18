using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Rendering.PostProcessing;

[ExecuteInEditMode]
public class PhotoDCL_2x2 : MonoBehaviour
{
    public Transform CameraCOG;
    public Transform Camera;

    [Header("Set Anchor Position")]
    public bool North;
    public bool South;
    public bool East;
    public bool West;
    [Space(4)]
    [Header("Set Anchor Rotation")]
    public bool Add90;
    public bool Substract90;
    [Space(4)]
    [Header("Camera Coordinates")]
    public Transform EastPos;
    public Transform SouthPos;
    public Transform WestPos;
    public Transform NorthPos;
    [Space(4)]
    [Header("Set Camera FOV")]
    public bool ChangeFOV;
    [Range(0, 200)]
    public float FarClip;
    [Range(-30f, 10)]
    public float NearClip;
    [Range(30f, 200f)]
    public float Size;
    [Space(4)]
    [Range(20, 60)]
    public float Height;
    [Range(-20, 20)]
    public float Side;




    // Start is called before the first frame update
    private void Awake()
    {

        MatchCoordinates();
        FindCamera();


    }
    void Start()
    {
       
        North = true;
        ResetFOV();
        MatchValues();
 
    }

    // Update is called once per frame
    void Update()
    {
        if(North == true || South == true || East == true || West == true )

        {

            MoveCamera();

        }
     
        if (ChangeFOV == true)
        {

            FOVCamera();

        }

        if (Add90 == true || Substract90 == true)
        {
            RotateCamera();
        }
    }
    void MoveCamera()
    {

        if (North == true)
        {
            CameraCOG.transform.position = NorthPos.position;
            Debug.Log("NorthPos set");
            CameraCOG.transform.eulerAngles = new Vector3(0, 0, 0);
            North = false;
        }
        if (South == true)
        {
            CameraCOG.transform.position = SouthPos.position;
            CameraCOG.transform.eulerAngles = new Vector3(0, 180, 0);

            Debug.Log("SouthPos set");
            South = false;
        }
        if (East == true)
        {
            CameraCOG.transform.position = EastPos.position;
            Debug.Log("EastPos set");
            CameraCOG.transform.eulerAngles = new Vector3(0, 90, 0);
            East = false;
        }
        if (West == true)
        {
            CameraCOG.transform.position = WestPos.position;
            CameraCOG.transform.eulerAngles = new Vector3(0, 270, 0);
            Debug.Log("WestPos set");
            West = false;
        }

    }
    void FOVCamera()
    {

        Camera.GetComponent<Camera>().farClipPlane = FarClip;
        Camera.GetComponent<Camera>().nearClipPlane = NearClip;
        Camera.GetComponent<Camera>().orthographicSize = Size;
        Camera.GetComponent<Transform>().position = new Vector3(Side, Height,0);
                     
    }

    [ContextMenu("Match Coordinates")]
    void MatchCoordinates()
    {
        EastPos = gameObject.transform.Find("PosEast");
        NorthPos = gameObject.transform.Find("PosNorth");
        WestPos = gameObject.transform.Find("PosWest");
        SouthPos = gameObject.transform.Find("PosSouth");
    }

    [ContextMenu("Rotate Camera -90")]
    void RotateCamera()
    {
        if (Add90 == true)
        {
            CameraCOG.GetComponent<Transform>().eulerAngles = new Vector3(+0, CameraCOG.transform.eulerAngles.y + 90, +0);
            Add90 = false;
        }
        else
            CameraCOG.GetComponent<Transform>().eulerAngles = new Vector3(+0, CameraCOG.transform.eulerAngles.y - 90, 0);
        Substract90 = false;
    }

    [ContextMenu("Reset FOV")]
    void ResetFOV()
    {
        Camera.GetComponent<Camera>().nearClipPlane = -10;
        Camera.GetComponent<Camera>().farClipPlane = 60;
        Camera.GetComponent<Camera>().orthographicSize = 50;
        ChangeFOV = false;
    }

    [ContextMenu("Find Camera")]
    void FindCamera()
    {
        CameraCOG = GetComponent<Transform>().Find("CameraCOG");
        Camera = CameraCOG.GetComponent<Transform>().Find("Camera");
    }

    [ContextMenu("Match Values")]
    void MatchValues()
    {
        FarClip = Camera.GetComponent<Camera>().farClipPlane;
        NearClip = Camera.GetComponent<Camera>().nearClipPlane;
        Size = Camera.GetComponent<Camera>().orthographicSize;
        Height = Camera.GetComponent<Transform>().position.y;
        Side = Camera.GetComponent<Transform>().position.z;

    }

}
