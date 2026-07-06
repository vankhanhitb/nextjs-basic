import Link from "next/link";
import {Card} from "../../components/Card"

export default function Notification(){
  return(
    <Card>
      <div>Notification</div>
      <div>
        <Link href="/complex-dashboard/archived" className="mx-5">Archived</Link>
      </div>
    </Card>
  )
}