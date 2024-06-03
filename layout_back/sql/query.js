module.exports = {
    getLayout : `select * from public.layout_info order by lay_id`,
    updateLayout: `update public.layout_info set ` +
    `i=$1, x=$2, y=$3, w=$4, h=$5 where lay_id=$6`,
}
