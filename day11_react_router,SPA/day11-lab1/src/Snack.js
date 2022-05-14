import { useNavigate } from "react-router-dom";

function Snack() {
  let navigate = useNavigate();

  function handleChange(e) {
    e.preventDefault();
    let form = e.currentTarget;
    let formData = new FormData(form);
    let data = {
      flavor: formData.getAll("flavors"),
      size: formData.get("size"),
      note: formData.get("note"),
    };
    // ให้เปลี่ยน path เป็น /snack/detail
    navigate("/snack/detail", { replace: true, state: { data } });
  }
  return (
    <>
      <form onSubmit={handleChange}>
        <p>What size do you like?</p>
        <p>
          <label>
            <input type="radio" name="size" value="small" />
            Small
          </label>
          <br />
          <label>
            <input type="radio" name="size" value="large" />
            Large
          </label>
          <br />
        </p>

        <p>What flavor do you like?</p>
        <p>
          <label>
            {/* ตรง value ส่วนใหญ่ใช้ภาษาอังกฤษ ตัวเล็กหมด */}
            <input type="checkbox" name="flavors" value="chocolate" />
            chocolate
          </label>
          <br />
          <label>
            <input type="checkbox" name="flavors" value="vanilla" />
            vanilla
          </label>
          <br />
        </p>

        <p>
          หมายเหตุ <input type="text" name="note" />
        </p>

        <input type="submit" />
      </form>
    </>
  );
}

export default Snack;
