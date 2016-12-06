import {ServiceRow} from "../services/garage-data.service";
/**
 * Created by VBezruchenko on 12/3/2016.
 */
export class Service
{
    public static data:Array<ServiceRow> =
        [
            {description:"Замена масла в двигателе (ДВС), в т.ч. экспресс замена масла",done:true},
            {description:"Замена масла в механической коробке передач (КПП)",           done:true},
            {description:"Замена масла в редукторе",                                    done:false},
            {description:"Замена масла в ведущем мосту",                                done:true},
            {description:"Замена масла в автоматической коробке передач (АКПП)",        done:true},
            {description:"Замена масла с промывкой и фильтром",                         done:false},
            {description:"Замена масла и фильтра АКПП",                                 done:true}
        ]
}