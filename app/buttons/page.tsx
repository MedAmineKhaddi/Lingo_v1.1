import { Button } from "@/components/ui/button";

const ButtonsPage = ()=>{
    return(
        <div className="p-4 space-y-4 flex flex-col max-w-200 text-800 font-bold text-lg">
          
           <Button variant="primary"> Primary </Button>
           <Button variant="primaryOutline"> Primary Outline</Button>
           <Button variant="Secondary"> Secondary </Button>
           <Button variant="SecondaryOutline"> Secondary Outline </Button>
           <Button variant="Danger"> Danger </Button>
           <Button variant="DangerOutline"> Danger Outline </Button>
           <Button variant="Super"> Super </Button>
           <Button variant="SuperOutline"> Super Outline </Button>
           <Button variant="Sidebar"> Sidebar </Button>
           <Button variant="SidebarOutline"> Sidebar Outline </Button>
           <Button variant="Ghost"> Ghost </Button>
           <Button> Default</Button>
        </div>
    );
}
export default ButtonsPage;